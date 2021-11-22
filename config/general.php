<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env("ENVIRONMENT") === "dev";
$isProd = App::env("ENVIRONMENT") === "production";

return [
  "*" => [
    "defaultWeekStartDay" => 1,
    "omitScriptNameInUrls" => true,
    "cpTrigger" => App::env("CP_TRIGGER") ?: "admin",
    "limitAutoSlugsToAscii" => true,
    "useProjectConfigFile" => false,
    "securityKey" => App::env("SECURITY_KEY"),
  ],
  "dev" => [
    "devMode" => true,
    "disallowRobots" => true,
  ],
  "staging" => [
    "allowAdminChanges" => true,
    "allowUpdates" => false,
    "disallowRobots" => true,
  ],
  "production" => [
    "allowAdminChanges" => true,
    "allowUpdates" => false,
  ],
];
