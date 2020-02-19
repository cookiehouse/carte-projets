# Installation de l'environnement de développement

## 1) Installer Chocolatey

Ouvrir `Powershell` en mode administrateur (clique droit puis 'Exécuter en tant qu'administrateur').
Executer la commande suivante:

``` Powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

## 2) Installer `vscode`

``` Powershell
choco install vscode
```

> Note: Entrez 

## 3) Installer `nodejs`

``` Powershell
choco install nodejs
```

## 4) Installer `git`

``` Powershell
choco install git
```

## 5) Cloner le répertoire Git

``` Powershell
git clone https://github.com/cookiehouse/carte-projets.git
```