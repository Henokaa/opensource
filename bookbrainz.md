# How to install book brainz locally on windows 
This is a brief introduction on While going through the book brainz documentation you will find this part of the page.
<br />

![Capture](https://user-images.githubusercontent.com/69524541/160836998-d2bff1e5-59ba-4e6d-a0f2-d56791dba11e.PNG)

First step

# Installing Docker on Windows 10

* First make sure Windows is up-to-date.
  * In the Windows search type "Windows Update" and select `Windows Update setting`
  * You should see a green check and “You’re up to date”.  If not click “Check for updates”.  You will 
  need to **repeat this process until you no longer have any updates to install**. 
* Next install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
  * From the Windows Search Type "powershell" then right-click on `Windows PowerShell` and then `Run as administrator`.
  * Click `Yes' to allow PowerShell to make changes to your device.
  * In the Administrator: Windows PowerShell window run (copy and past) the command "wsl --install -d Ubuntu".
  * Next enable the Virtual Machine Platform. 
  * In the Administrator: Windows PowerShell run (copy and past) "dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart".
  * Download and install the 
  [WSL2 Linux kernel update package for x64 machines](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
  * Reboot Windows.
  * Again from the Windows Search Type "powershell" then right-click on `Windows PowerShell` and then 
  `Run as administrator`.
  * In the PowerShell window run "wsl --set-default-version 2".
  * Next install a Linux distribution from the [Microsoft Store](https://aka.ms/wslstore).  I recommend Ubuntu.  
  This will take several minutes to download and install.
  * You will be asked to set up a Linux user.  I recommend the same username you use for Windows.
  * You will now be able to run Linux commands in the Ubuntu terminal window. I recommend pinning the Ubuntu icon 
  to the taskbar.
* Now you can install [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
  * Download the Docker Desktop for Windows installer from 
  [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
  * Run the installer.
  * Reboot Windows.
  * Login to Windows and let Docker finish setting up.  This can take a few minutes depending on your machine.
  * You have now installed Docker on Windows 10 for local workstation development.
* From this point on you can easily setup book brainz locally by going through the rest of the page in the offical documentation of book brainz. 
https://bookbrainz-dev-docs.readthedocs.io/en/latest/docs/installation.html
