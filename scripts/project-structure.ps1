Get-ChildItem -Recurse -File -Exclude *.map |
Where-Object { $_.FullName -notmatch "node_modules|dist|\.git" } |
ForEach-Object { $_.FullName.Replace((Get-Location).Path + "\", "") } |
Out-File docs/project-structure.txt