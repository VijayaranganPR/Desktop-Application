/*
process.env is a property in Node.js that contains the environment variables for the current process. 
This property is an object that maps environment variable names to their values.
*/

console.log(process.env)
console.log(process.env.os)     // Windows_NT
/*
{
  ACSetupSvcPort: '23210',
  ACSvcPort: '17532',
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\prvij\\AppData\\Roaming',    
  CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\LOCAL\\crashpad_18648_TLVXKAHXQTVHGHFG',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'VIJAYARANGANSPC',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',        
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  GameFirstUserPath: 'C:\\ProgramData\\ASUS\\GameFirst',
  GameTurbo: 'C:\\Program Files (x86)\\ASUS\\GameFirst\\',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\prvij',
  LOCALAPPDATA: 'C:\\Users\\prvij\\AppData\\Local', 
  LOGONSERVER: '\\\\VIJAYARANGANSPC',
  NUMBER_OF_PROCESSORS: '16',
  OneDrive: 'C:\\Users\\prvij\\OneDrive',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',        
  OS: 'Windows_NT',
  Path: 'C:\\Program Files\\Eclipse Adoptium\\jdk-11.0.17.8-hotspot\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Java\\jdk-19\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn\\;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Users\\prvij\\anaconda3;C:\\Users\\prvij\\anaconda3\\Library\\mingw-w64\\bin;C:\\Users\\prvij\\anaconda3\\Library\\usr\\bin;C:\\Users\\prvij\\anaconda3\\Library\\bin;C:\\Users\\prvij\\anaconda3\\Scripts;C:\\Users\\prvij\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Program Files\\Azure Data Studio\\bin;C:\\Users\\prvij\\AppData\\Local\\atom\\bin;C:\\Users\\prvij\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Users\\prvij\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\prvij\\AppData\\Roaming\\npm',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'AMD64 Family 23 Model 96 Stepping 1, AuthenticAMD',
  PROCESSOR_LEVEL: '23',
  PROCESSOR_REVISION: '6001',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',   
  ProgramW6432: 'C:\\Program Files',
  PROMPT: '$P$G',
  PSModulePath: 'C:\\Users\\prvij\\Documents\\WindowsPowerShell\\Modules;C:\\Users\\prvij\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell',
  PUBLIC: 'C:\\Users\\Public',
  RlsSvcPort: '22112',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\prvij\\AppData\\Local\\Temp',   
  TMP: 'C:\\Users\\prvij\\AppData\\Local\\Temp',    
  USERDOMAIN: 'VIJAYARANGANSPC',
  USERDOMAIN_ROAMINGPROFILE: 'VIJAYARANGANSPC',     
  USERNAME: 'prvij',
  USERPROFILE: 'C:\\Users\\prvij',
  windir: 'C:\\Windows',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.74.3',
  LANG: 'en_US.UTF-8',
  COLORTERM: 'truecolor',
  GIT_ASKPASS: 'c:\\Users\\prvij\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
  VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\prvij\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',   
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
  VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\prvij\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
  VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-f5aa727a1e-sock'
}
*/