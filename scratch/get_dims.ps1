Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile('C:\Users\admin\Downloads\FOUNDER POST\1.png')
Write-Host "Poster 1 dimensions: $($img1.Width) x $($img1.Height)"
$img1.Dispose()

$img2 = [System.Drawing.Image]::FromFile('C:\Users\admin\Downloads\FOUNDER POST\2.png')
Write-Host "Poster 2 dimensions: $($img2.Width) x $($img2.Height)"
$img2.Dispose()
