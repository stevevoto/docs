---
title: 128T 5.2 Release Notes
sidebar_label: '5.2'
---
:::info
Issues resolved in a release are merged into subsequent releases chronologically AND numerically. 

If you do not see an issue listed below, it may have been resolved in another recently released version. A link to the Release Notes for the most recent chronological release of SSR / 128T Software is provided.

Alternatively, refer to the **[List of Releases](about_releases.md)** page for release dates and links to all SSR / 128T Release Notes; or, if you know the Issue ID Number, enter that into the Search field at the top right of this page. 
:::

## Release 5.2.2
**Release Date:** August 24, 2021
Contains fixes from: [Release 5.1.5, August 13, 2021](release_notes_128t_5.1.md#release-515)

### New Features

- **I95-26075 Generate PCAP directly from Session table:** A button has been added to both the Session Debug table and the Top Sessions table that allows the user to create a PCAP file containing the specific row data from each table.

### Resolved Issues

- **I95-41481 Reachability metrics actions are not available for TLS modify scenarios:** Reachability stats for app-id session updates have been added. 
------
- **I95-41617 In some rare cases the GUI may enter a re-render loop:** Resolved an issue where the value provided by `usePreLoginData` was being used to determine if the application should re-render.
------
- **I95-41652 Misspelled parameter in the Influx setup template:** This issue has been resolved. 
------
- **I95-41689 Limited search on FIB table:** Restore FIB filtering query parameters.
------
- **I95-41704 Node processes using excessive CPU during upgrade:** Changes made to initiate Swagger generation only when a file is updated or changed.

### Caveats

- **I95-40335 Package dependency conflicts:** 5.2.2 supports the `vrsx-sfc` plugin. With this plugin, upgrading to 5.3.0 is not supported. If the system is upgraded to 5.3.0 with this plugin installed, the plugin dependencies will be removed and the features provided with this plugin will no longer function.

## Release 5.2.1
**Release Date:** July 20, 2021

Contains fixes from: [Release 5.1.4, June 28, 2021](release_notes_128t_5.1.md#release-514)

###  New Features and Improvements

- **I95-35414 Refresh actions now available for individual sections on the Router Page:** The Device interface, Network Interface, and Peer Paths table sections now can be refreshed independently.
------
- **I95-36224 Handle names in application-id JSON:** The application-module json output `common-name object` now includes a list of referenced common-names, in addition to the transport-information list.
------
- **I95-38244 The Routers Page is easier to Search:** Added a column selector and a search matching system to make the search function more granular.
------
- **I95-38445 GUI Session Capture:** Added pages to the user interface that allow you to view and configure capture information.
------
- **I95-40458 Added the ability to toggle between Advanced and Basic Configuration mode:** Added the option to limit the main configuration screen to the most frequently used fields, or display all configuration options.

### Resolved Issues

- **I95-19871 Unknown session-type mismatched:** When a session-type does not have a match, the `Unclassified` service-class is used when it is available.**
------
- **I95-40075/I95-40134 Use gateway from service route for interface ping gateway:** The `service-route next-hop gateway-ip` will be used for ICMP ping reachability probe if so configured. If no IP is configured, then the `fib-route gateway` will be used, and finally the `network-interface gateway` will be used.
------
- **I95-40124 GRE Interface not inherting teneancy from parent:** The GRE Interface now inherts teneancy and neighborhood configuration from parent.
------
- **I95-40168 `show udp-transform` not providing result details:** The `show udp-tranform` reason field now provides correct details.
------
- **I95-40185 Duration type assignment values are not being set correctly:** This issue has been resolved by ensuring that fields using duration type always use default values.
------
- **I95-40191 Office365 service failing on bootup:** This issue has been resolved.
------
- **I95-40888`show application modules status` generating an unhandled error:** Resolved an issue with `show application modules status` causing unandled errors.
------

## Release 5.2.0
**Release Date:** May 10, 2021

### New Features and Improvements

- **I95-61 Service Health Learning and Fault Avoidance:** In-path metrics and heuristics are now able to be used for server reachability and to determine network health. See [Service Health Learning](config_service_health.md) for more information.  
------
- **I95-17681 Pre- and Post-Login Banners:** Pre- and post-login banners can be configured by selecting Configuration, clicking on the Authority tile, and scrolling down to the Web Messages field. 
------
- **I95-21631 Customized Tables:** Support has been added for user customizable tables in the Custom Reports view of the GUI. Tables can have multiple metrics and display sum, average, min or max values across the selected time range.
------
- **I95-33451 Support Persistence for [In-Memory Metrics](config_in-memory_metrics.md):** Metrics intended for persistence can be configured as part of a Metrics Profile. Profiles are configured at the Authority level and referenced by the relevant routers. Each Profile specifies a number of metrics and the desired parameter filters.
------
- **I95-36657 Improve Packet throughput of KNI-based Interfaces:** KNI buffer performance has been enhanced to handle large bursts of traffic. 
------
- **I95-37296 Native 128T Support for GRE:** Native support (non-plugin) is availble for GRE Tunneling, providing better performance. For more information, see [Native GRE Tunnels](config_gre_tunnel.md).
------
- **I95-37459 Show Commands for Services:** The [show fib](cli_reference.md#show-fib) and [show fib lookup](cli_reference.md#show-fib-lookup) commands have been enhanced to provide more granular path-related debugging.
------
- **I95-37510 [AppID Modules](concepts_appid.md#appid-using-modules) can be run as systemd units:** Added support for module execution as a systemd unit in addition to the existing script-based method, and the use of REST APIs to propagate module registrations and results.
------
- **I95-38081 Automatic generation of MSS Value:** The [network-interface configuration object](config_reference_guide.md#network-interface) now has an automatic option for the enforced-mss value. This automatically calculates the MSS of the network interface from the interface session MTU.
------
- **I95-38514 View User Activity:** Added a user activity table to the GUI on the Users page, as well as adding a new [PCLI command `show user activity`](cli_reference.md/#show-user-activity).
------
- **I95-39303 `show application modules` added:** [`show application modules status`](cli_reference.md/#show-application-modules-status) displays application names and transport information of a module. [`show application modules registration`](cli_reference.md/#show-application-modules-registration) displays registered application modules. 
------
- **I95-39336 Best Path Criteria:** The [service-policy](config_reference_guide.md/#service-policy) has been enhanced to include values that allow the router to select the best path based on the current latency/MOS values of the paths. 
------

### Resolved Issues

------
- **I95-37101 PCLI Updates for `show stats since` command:** The PCLI notes inconsistencies in data between current values and historical ones to indicate when the data may not be accurate.
------
- **I95-38510 Security mismatch on HA nodes dropping internode traffic:**  Resolved an issue where dynamically reconfiguring inter-node-security may cause all internode traffic to be dropped.
------
- **I95-39477 Configuration validation failure when conductor non-forwarding fabric interfaces are configured in different subnets:** Updated to display a warning to the user to correct the issue, rather than failing.
------
- **I95-39811 Office365 module not including TCP and UDP ports:** Resolved an issue where the AppID module was not including port and protocol data.
------
- **I95-39817 General CPU Stats not showing in Conductor UI after upgrade:** Resolved an issue where stats were not captured. 
------
- **I95-39854 Management over Forwarding not bringing up Eth0 on shutdown:** Resolved an issue preventing devices from unbinding cleanly. 
------
- **I95-39883 Use String Name for Protocol:** Resolved an issue where the protocol was displaying as a number instead of a name. 
------
- **I95-39953 Spike in IPFIX records:** Resolved a race condition causing a collector to enter an infinite loop.
------
- **I95-39982 module registration removal not refreshing services:** App-ID services now refresh correctly. 
------
- **I95-40036 Attempting to save Configurations that are too large:** The Data Manager logs an error when a configuration to be saved is larger than the buffer. 
------
- **I95-40060 `show session captures` not displaying active captures:** Updated the query argument to correctly display session captures for all services.
------
- **I95-40208 Quickstart not setting the minion_id to the hardware identifier when the value is blank:** Previously, if the Quickstart configuration did not have a value for the `minion_id`, the `minion_id` would not be set to the hardware identifier. This has been corrected in the `128T-5.2.0-1.el7.OTP.v2.x86_64.iso` ISO.

## Caveats

- **I95-26627 Prevent static route interface next hops with the same global ID:** In HA configurations with a shared interface, only one node in the pair should be configured as a static route next hop. Othrewise, deleting the shared interface from one node will also cause the static route to be deleted.

