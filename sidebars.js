module.exports = {
  "docs": {
    "About": [
      "about_128t",
      "about_svr_savings",
      "about_releases",
      "about_support_policy",
      "about_supported_platforms",
      "about_certified_platforms",
      "about_security_policy",
      "about_services_description",
      "CONTRIBUTING",
    ],
    "Introduction": [
      "intro_getting_started",
     ],
    "Deployment Considerations": [
      "intro_system_reqs",
     ],
    "Installation Process": [
      "intro_installation",
      "intro_downloading_iso",
      "intro_creating_bootable_usb",
      "intro_installation_bootable_media",
      "intro_basic_conductor_config",
      "intro_basic_router_config",
      "intro_otp_iso_install",
      ],
    "Cloud Installations":[
      "intro_installation_aws",
      "intro_installation_quickstart_aws",
      "intro_installation_azure",
      "intro_initialize_HA_conductor.md",
    ],
    "Supporting Information - Appendix":[
      "intro_installation_installer",
      "intro_upgrading",
      "intro_rollback",
    ],
    "Concepts": [
      "concepts_application_discovery",
      "concepts_appid",
      "concepts_ha_theoryofoperation",
      "concepts_interface_types",
      "concepts_kni",
      "concepts_linux_host_networking",
      "concepts_network_planes",
      "concepts_metadata",
      "concepts_metrics",
      "concepts_machine_communication",
      "concepts_pcli",
      "concepts_session_timer",
      "concepts_STEP",
      "concepts_waypoint_ports",
      "concepts_glossary",
    ],
    "Administration": [
      {
        "type": "category",
        "label": "Configuration",
        "items": [
          "config_basics",
          "config_access_mgmt",
          "config_asset_connection_resiliency",
          "config_bgp",
          "config_reference_guide",
          "config_audit_log",
          "config_dhcp",
          "config_dns_proxy",
          "config_ldap",
          "config_management_over_forwarding",

          "config_ha",
          "config_dual_router_ha",
          "config_non_forwarding_ha_interfaces",
          "config_adding_interfaces_to_ha_team",
          "config_transition_standalone_to_ha",
          
          "config_nat",
          "config_ospf",
          "config_rate_limiting",
          "config_snmp",
          "config_snmp_metrics",
          "config_static_hostname_mapping",
          "config_STEP",
          "config_tenants",
          "config_templates",
        ],
      },
      {
        "type": "category",
        "label": "Security",
        "items": [
          "sec_adaptive_encrypt",
        ],
      },
      {
        "type": "category",
        "label": "How To",
        "items": [
          "howto_conductor_migration",
          "howto_extend_gui_nav",
          "howto_lte",
          "howto_maintenance_mode",
          "howto_ms365",
          "howto_trusted_ca_certificate",
          "howto_tune_bfd",
        ],
      },
      {
        "type": "category",
        "label": "Troubleshooting",
        "items": [
          "ts_applications",
          "ts_ap_salt_minion",
          "ts_cpu_spikes",
          "ts_connecting_to_routers",
          "ts_forwarding_resource_pools",
          "ts_logs",
          "ts_mac_uniqueness",
          "ts_packet_capture",
          "ts_t1_troubleshooting",
        ],
      },
    ],
    "Events": [
      "events_overview",
      "events_alarms",
      "events_events",
    ],
    "Best Practices": [
      "bcp_att_avpn_configuration",
      "bcp_using_128T_as_ntp_server",
      "bcp_conductor_deployment",
      "bcp_qos_msft_expressroute",
      "bcp_lte_peering",
      "bcp_monitoring_headends",
      "bcp_salt_pillars",
      "bcp_sdwan_design_guide",
      "bcp_service_and_service_policy_design",
      "bcp_service-policy_defaults",
      "bcp_tenants",
    ],
    "CLI Reference": [
      "cli_reference",
    ],
    "Installer/Initializer Reference": [
      "installer_cli_reference",
      "installer_preferences",
      "initializer_cli_reference",
      "initializer_preferences",
    ],
    "Plugins": [
      "plugin_intro",
      "plugin_bgp_community_services",
      "plugin_cloud_ha",
      "plugin_dns_app_id",
      "plugin_dns_cache",
      "plugin_gre",
      "plugin_icmp_reachability_detection",
      "plugin_ipsec_client",
      "plugin_loopback_static_routes",
      "plugin_m800_watchdog",
      "plugin_monitoring_agent",
      "plugin_mosh",
      "plugin_sip_alg",
      "plugin_wireguard",
    ],
    "REST APIs": [
      "api_rest_4.2.0",
    ],
    "Release Notes": [
      {
        "type": "category",
        "label": "128T",
        "items": [
          "release_notes_128t_5.0",
          "release_notes_128t_4.5",
          "release_notes_128t_4.4",
          "release_notes_128t_4.3",
          "release_notes_128t_4.2",
          "release_notes_128t_4.1",
          "release_notes_128t_4.0",
        ],
      },
      {
        "type": "category",
        "label": "128T Installer",
        "items": [
          "release_notes_128t_installer_2.6",
          "release_notes_128t_installer_2.5",
          "release_notes_128t_installer_2.4",
          "release_notes_128t_installer_2.3",
          "release_notes_128t_installer_2.2",
          "release_notes_128t_installer_2.1",
        ],
      },
      {
        "type": "category",
        "label": "128T SIP ALG",
        "items": [
          "release_notes_128t_sip_alg_2.1",
        ],
      },
      {
        "type": "category",
        "label": "128T ZScaler",
        "items": [
          "release_notes_128t_zscaler_1.1",
        ],
      },
    ],
  },
};
