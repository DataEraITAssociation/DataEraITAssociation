---
title: Installment
sidebar_position: 1
sidebar_label: Installment Section
---

### Installation

This page guides you through the steps to collect and install everything you need to start programming.

### What do you need?

To get started, you’ll need:

- A Windows 10 or Mac OS computer
- Internet access and administrator access

  This is required during the installation only. You will not need special access to write and run programs later on.

- A microSD card

  You’ll need a card with a minimum capacity of 4GB and a maximum capacity of 32GB. This type of microSD card is also known as microSDHC. We recommend cards with Application Performance Class A1.

- A microSD card slot or card reader in your computer

`If your computer does not have a (micro)SD card slot, you can use an external USB (micro)SD card reader.

- A mini-USB cable, like the one included with your EV3 set

The typical configuration of this equipment is summarized in [Figure 1](https://pybricks.com/ev3-micropython/startinstall.html#fig-overview).

![Overview](https://pybricks.com/ev3-micropython/_images/overview_label.png)

Figure 1 Setup overview

### Preparing your computer

You’ll write your MicroPython programs using Visual Studio Code. Follow the steps below to download, install, and configure this application:

1. Download [Visual Studio Code](https://code.visualstudio.com/Download).
2. Follow the on-screen instructions to install the application.
3. Launch Visual Studio Code.
4. Open the extensions tab.
5. Install the EV3 MicroPython extension as shown in [Figure 2](https://pybricks.com/ev3-micropython/startinstall.html#fig-store).

![Figure 2 Installing the extension from the Visual Studio Code marketplace](https://pybricks.com/ev3-micropython/_images/store_label.png)

### Preparing the microSD card

To make it possible to run MicroPython programs on your EV3 Brick, you’ll now learn how to install the required tools on your microSD card.

If the microSD card contains files you want to keep, make sure to create a backup of its contents first. See [managing files on the EV3](https://pybricks.com/ev3-micropython/startrun.html#managefiles) to learn how to backup your previous MicroPython programs if necessary.

This process erases everything on your microSD card, including any previous MicroPython programs on it.

To install the MicroPython tools on your microSD card:

1. Download the [EV3 MicroPython microSD card image](https://education.lego.com/en-us/support/mindstorms-ev3/python-for-ev3) and save it in a convenient location. This file is approximately 360 MB. You do not need to unzip the file.

2. Download and install a microSD card flashing tool such as [Etcher](https://www.balena.io/etcher/).

3. Insert the microSD card into your computer or card reader.

4. Launch the flashing tool and follow the steps on your screen to install the file you have just downloaded. If you use Etcher, you can follow the instructions below, as shown in [Figure 3](https://pybricks.com/ev3-micropython/startinstall.html#fig-etcher).

   a. Select the EV3 MicroPython microSD card image file you have just downloaded.

   b. Select your microSD card. Make sure that the device and size correspond to your microSD card.

   c. Start the flashing process. This may take several minutes. Do not remove the card until the flashing process is complete.

![Figure 3 Using Etcher to flash the EV3 MicroPython microSD card image](https://pybricks.com/ev3-micropython/_images/etcher_label.png)

### Updating the microSD card

To update the microSD card, download a new image file using the link above and flash it to the microSD card as described above. Be sure to [back up any MicroPython programs you want to save](https://pybricks.com/ev3-micropython/startrun.html#managefiles).

You do not need to erase the contents of the microSD card first. This is done automatically when you flash the new image file.
