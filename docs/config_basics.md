---
title: Configuration Management on the 128T
sidebar_label: Configuration Management
---

Configuration is what transforms your 128T software into a Session-Smart Router. The following sections describe the various configurations available to you on your 128T, the basics of the configuration workflow, and important things to consider when managing your 128T devices.

## Factory Default Configuration

When a new node is initialized, it will be given factory default configuration. The factory defaults include the configuration attributes given to it during initialization (the router name and node name, and a high availability counterpart node if applicable) as well as various configuration elements that are part of the global data of an Authority – session-type elements that represent common network protocols (e.g., HTTP, HTTPS, SSH), and service-class elements for common DSCP values.

By default, these factory default elements are not displayed when viewing the configuration through the PCLI. To view the factory default settings, add the keyword "verbose" at the end of a `show` configuration statement; e.g., `show config running verbose`. Factory default elements are always displayed when viewing the configuration through the GUI.

To restore a 128T system back to its factory defaults, use the `restore config factory-default` command from the PCLI.

## Generated Configuration

Occasionally, the 128T Conductor will generate configuration on behalf of the administrator; this is typically done to facilitate some configuration steps that would otherwise be somewhat onerous or prone to error. When the 128T Conductor generates configuration on behalf of an administrator, it includes a `generated` setting in each configuration element it has generated, and sets the value of that setting to `true`.

The 128T Conductor will regenerate this configuration each time the configuration is committed. This ensures that the generation properly reflects any changes that have been made to the rest of the configuration from which the generated configuration was derived. Thus, when committing configuration, the 128T Conductor first *deletes all configuration that has the generated flag set to true*.

The consequence of this is that if you have made any changes to configuration elements that were originally generated by the 128T Conductor, but neglected to set the generated flag to `false`, those elements will be discarded and regenerated. Thus, it is mandatory that you set the generated flag to `false` before modifying any generated configuration to make it persistent.

### Forcing the Generation of Configuration

The Force Configuration Generation command (selected from the GUI or using `create config autogenerated` from the PCLI) generates and stages the configuration changes into the current candidate configuration. This allows you to validate, inspect, make edits, and commit these changes as part of the work flow.

![toolbar](/img/config_force_regen1.png)
![popup](/img/config_force_regen2.png)
![dialog](/img/config_force_regen3.png)

## Running

The running configuration is the set of configuration elements that the 128T is currently using to make routing decisions, forward traffic, enforce policy, etc. The 128T loads its running configuration when the software starts; this configuration will either be the one that it retrieves at start from its conductor, or from its local disk (in the case where it is either unmanaged, or unable to reach its conductor).

## Candidate

The 128T has one *candidate* configuration that is common to all administrators. All configuration additions, modifications, and deletions are applied to the candidate configuration. These modifications are persistent between software reloads and system reboots.

When the candidate and running configurations do not match (i.e., there are uncommited changes), the PCLI command prompt will include an indicator to let you know:

```
*admin@labsystem1.fiedler#
```

The initial asterisk character lets you know that there are changes.

## Configuration Workflows

Unlike many traditional routers, the 128T Networking Platform contains a series of interdependent pieces of configuration – referred to as our *data model* – to inform its decisions on routing, forwarding, and policy enforcement. These interdependencies mean that the method of working with the 128T may be slightly different than you are accustomed to.

The basic premise, as mentioned in the sections that precede this, is that there are two configurations on your 128T at any point in time: the *running configuration* and the *candidate configuration*. You stage configuration changes in the candidate, and when you have completed your configuration activity, you validate and commit them to the running configuration – bringing the candidate and running back into unison. From there, you may undertake your next set of configuration changes, etc.

This basic workflow (configure, validate, commit) is the fundamental mechanism for effecting change in the behavior of your 128T Networking Platform. Other operations you may be familiar with from other network devices, such as backup/restore, etc., have analogues in the 128T paradigm. You only need to be cognizant of the fact that these backup/restore operations may operate on either of the candidate configuration, the running configuration, or both.

### Comparing Configurations

To see the changes between the candidate and running configuration, use the `compare config` command within the PCLI. This takes two positional arguments, either of which may be `candidate`, `running`, or the `name` of a previously exported configuration. The output for the `compare config` command shows the diffs that exist between the two configurations. The ordering of the arguments is significant; issuing the command `compare config running candidate` will show the changes that have been made to the candidate configuration. The command `compare config candidate running` will show the set of changes that would need to be applied to restore the candidate configuration back to the running configuration. The _name_ argument identifies a previously exported configuration file to compare against the running, candidate, _or another exported configuration file._ This argument allows you to compare configurations **without** having to import the exported config into the candidate config for comparison.

:::note
The output of `compare config candidate running` is formatted such that it can be copied and pasted back into the PCLI, to revert all changes and have the candidate be "reset" to the running configuration. Obviously, you can selectively copy/paste sections of this output back into the PCLI to revert only specific sets of changes. However, care must be taken when doing this, as the configuration is organized in a hierarchy with specific expectations around `exit`ing configuration blocks.
:::

### Restoring the Candidate

Akin to copying and pasting the output of `compare config candidate running` back into the PCLI, there is a specific command for reverting the entirety of the candidate configuration back to the running configuration's state. The command `restore config running` will reset the candidate back to the system's runtime configuration.

Within the GUI, there is a button in the navigation bar near the top of the window labeled "Revert to Running," which accomplishes this same goal.

### Import/Export

Use the `export config` command to save the candidate or running configuration. It is strongly recommended to frequently save the candidate configuration as a checkpoint for changes to be committed. In earlier releases the candidate configuration was stored on disk and would persist through product reboots. Beginning with 5.3, the candidate configuration is not saved to disk and will not persistent through reboot.

The running configuration can be exported as a working configuration, or for replicating the same configuration on another 128T, or for replicating the configuration to another system for archival/auditing. It is a useful practice to export the configuration prior to a system upgrade. The candidate or running configuration is backed up by executing `export config candidate <export-name>` or `export config running <export-name>`.

To import a configuration that has been exported, execute the `import config <file-name>`. Imported configurations are loaded into the candidate config. To apply the imported configuration to the system, a **Commit** operation must be executed for it to become the running config.

:::note
When copying exported configurations onto a 128T platform, the file must be placed in `/etc/128technology/config-exports` 
:::