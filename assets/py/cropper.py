from PIL import Image

im = Image.open(r"/Users/Tias/Developer/Projects/Current/Portfolio Website/images/LongColdPlanet2.png")

width, height = im.size

left = 0
top = 0
right = 32
bottom = 32

for x in range(width-32):
    left = x
    right = 32 + x
    imCrop = im.crop((left, top, right, bottom))
    imCrop.save('planet-logo'+str(x).zfill(2)+'.png', 'PNG')