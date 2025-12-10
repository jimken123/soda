#Requires -Version 7

[CmdletBinding()]
param (
    [Parameter(Mandatory=$false,
               Position=1)]
    [string]$Path = './docs'
)

Write-Host "Doing stuff..."

$cp = (Get-Location).Path

Get-ChildItem -Path $Path -Recurse -Filter *.md | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $codeBlocks = [regex]::Matches($content, '```scl(?! #ignore)\r?\n(.*?)```', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($codeBlocks.Count -gt 0) {
        foreach ($codeBlock in $codeBlocks) {
            $scl = $codeBlock.Groups[1].Value
            $tempFile = New-TemporaryFile
            $scl | Out-File -FilePath $tempFile -Encoding utf8NoBOM
            Write-Verbose $scl
            $output = ./.sequence/sequence.exe validate path $tempFile
            if (!$?) {
                Write-Warning "#################### $([System.IO.Path]::GetRelativePath($cp, $_.FullName)) ####################`n`n$($scl)`n$($output -join "`n")`n"
            }
            Remove-Item $tempFile
        }
    }
}
