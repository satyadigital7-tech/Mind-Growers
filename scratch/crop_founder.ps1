Add-Type -AssemblyName System.Drawing

$sourcePath = 'C:\Users\admin\Downloads\FOUNDER POST\2.png'
$img = [System.Drawing.Image]::FromFile($sourcePath)

function Crop-Image($x, $y, $w, $h, $destName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Set high quality settings
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($img, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $destPath = Join-Path 'C:\Users\admin\Downloads\kidsa-kindergarten-school-html5-template-2026-05-10-10-18-33-utc\Main files\scratch' $destName
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Saved crop to: $destPath"
}

# Candidate 1: Upper half right side (Head & shoulders focus)
# X: 1600 to 3375 (width 1775), Y: 1300 to 3600 (height 2300)
Crop-Image 1600 1300 1775 2300 "founder_crop_1.png"

# Candidate 2: Slightly more zoomed in
# X: 1650 to 3250 (width 1600), Y: 1400 to 3400 (height 2000)
Crop-Image 1650 1400 1600 2000 "founder_crop_2.png"

# Candidate 3: Head shot focus
# X: 1800 to 3100 (width 1300), Y: 1450 to 2750 (height 1300)
Crop-Image 1800 1450 1300 1300 "founder_crop_3.png"

# Candidate 4: Chest & Head focus
# X: 1700 to 3200 (width 1500), Y: 1400 to 3200 (height 1800)
Crop-Image 1700 1400 1500 1800 "founder_crop_4.png"

$img.Dispose()
