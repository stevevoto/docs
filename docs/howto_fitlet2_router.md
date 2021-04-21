---
title: Fitlet2 Router Setup Guide
sidebar_label: Fitlet2 Router Setup Guide
---

The [Compulab Fitlet2](https://fit-iot.com/web/products/fitlet2/) platform is a popular device for running the Session Smart Router (SSR) software in home and lab settings. This will guide you through the process of assembling, installing, and configuring a SSR on a Fitlet2.

:::caution
The Fitlet2 is not a certified device. This means it does not undergo routine testing, and other benefits of the [certified platform program](about_supported_platforms.md#128t-certification-program). It is a [qualified platform](about_supported_platforms.md#terminology).

This guide is intended for builders, integrators, and hobbyists. Physical device assembly required. If you are looking for pre-built devices for running SSR, see [Certified Platforms](about_certified_platforms.mdx).
:::

## Prerequisites

To begin, make sure you have the following components.

#### Device Components

The physical device build consists of a base Fitlet2 platform, memory, disk, and optional add-on NIC module:
* Fitlet2 with 4 CPU cores (Atom E3950 or Celeron J3455)
* 8Gb SO-DIMM (Timetec Hynix DDR3L 1866MHz PC3L-14900 204-Pin, part no. `78AP18NUSL2R8-8G`)
* 64GB SATA III M.2 SSD (Transcend MTS400, part no. `TS64GMTS400S`)
* *Optional* Dual NIC FACET Card (Compulabs FC-M2LAN)

:::note
These components can be purchased from consumer electronics retailers, such [Amazon](https://www.amazon.com/ideas/amzn1.account.AFEITBAWWFE3KCP64DCHR6WZFYOQ/31C3HW2CG2L54?ref=idea_share).

While exact parts are used in this guide, other compatible memory and disk parts may be used if the ones listed are unavailable (see [Fitlet2 specifications](https://fit-iot.com/web/products/fitlet2/fitlet2-specifications/) for compatibility).
:::

#### Assembly and Installation Components

To perform the physical assembly and software installation on the device, you will need the following:
* Phillips head screwdriver
* Bootable USB media
* USB keyboard
* Monitor with HDMI connection

#### Software Components
* Conductor
* SSR installation ISO

