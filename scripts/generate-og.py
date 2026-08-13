#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONT = Path("/System/Library/Fonts/AppleSDGothicNeo.ttc")
SF = Path("/System/Library/Fonts/SFNS.ttf")


def font(size: int, index: int = 4, english: bool = False):
    return ImageFont.truetype(str(SF if english else FONT), size=size, index=0 if english else index)


def cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    ratio = max(size[0] / image.width, size[1] / image.height)
    scaled = image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)
    left = (scaled.width - size[0]) // 2
    top = (scaled.height - size[1]) // 2
    return scaled.crop((left, top, left + size[0], top + size[1]))


canvas = cover(Image.open(PUBLIC / "images/climbing-motion-hero.png").convert("RGB"), (1200, 630))
canvas = ImageEnhance.Contrast(canvas).enhance(1.12).convert("RGBA")

shade = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
d = ImageDraw.Draw(shade)
for x in range(850):
    alpha = round(244 * (1 - x / 850) ** 1.6)
    d.line((x, 0, x, 630), fill=(4, 4, 8, alpha))
d.rectangle((0, 0, 1200, 630), fill=(4, 3, 8, 32))
canvas = Image.alpha_composite(canvas, shade)
d = ImageDraw.Draw(canvas)

icon = Image.open(PUBLIC / "images/dynocam-icon.png").convert("RGBA").resize((74, 74), Image.Resampling.LANCZOS)
canvas.alpha_composite(icon, (70, 66))
d.text((160, 103), "DynoCam", font=font(31, english=True), fill=(255, 255, 255), anchor="lm")
d.text((70, 225), "당신의 등반을,", font=font(67, 6), fill=(255, 255, 255))
d.text((70, 305), "한 편의 움직임으로.", font=font(67, 6), fill=(220, 208, 244))
d.text((72, 427), "AI CLIMBING CAMERA  ·  iPHONE  ·  iPAD", font=font(17, english=True), fill=(188, 180, 201))
d.rounded_rectangle((70, 495, 302, 550), radius=28, fill=(248, 248, 250))
d.text((186, 523), "Meet DynoCam  →", font=font(18, english=True), fill=(10, 9, 13), anchor="mm")

device = Image.open(PUBLIC / "images/screens/iphone-editor.png").convert("RGB")
device.thumbnail((245, 520), Image.Resampling.LANCZOS)
phone = Image.new("RGBA", (device.width + 24, device.height + 24), (0, 0, 0, 0))
pd = ImageDraw.Draw(phone)
pd.rounded_rectangle((0, 0, phone.width - 1, phone.height - 1), radius=34, fill=(5, 5, 8), outline=(185, 177, 198), width=3)
mask = Image.new("L", device.size, 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, device.width, device.height), radius=26, fill=255)
phone.paste(device, (12, 12), mask)
shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
ImageDraw.Draw(shadow).ellipse((895, 535, 1175, 605), fill=(0, 0, 0, 165))
canvas = Image.alpha_composite(canvas, shadow.filter(ImageFilter.GaussianBlur(24)))
canvas.alpha_composite(phone, (900, 78))

canvas.convert("RGB").save(PUBLIC / "og.png", "PNG", optimize=True)
print(PUBLIC / "og.png")
