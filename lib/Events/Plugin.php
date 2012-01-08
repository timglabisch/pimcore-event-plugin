<?php


class Events_Plugin extends Pimcore_API_Plugin_Abstract implements Pimcore_API_Plugin_Interface {


    public static function install() {

        if (self::isInstalled()) {
            $statusMessage = "Events Plugin successfully installed.";
        } else {
            $statusMessage = "Events Plugin could not be installed";
        }
        return $statusMessage;

    }

    public static function uninstall() {

        if (!self::isInstalled()) {
            $statusMessage = "Events Plugin successfully uninstalled.";
        } else {
            $statusMessage = "Events Plugin could not be uninstalled";
        }
        return $statusMessage;

    }

    public static function isInstalled() {
       return true;
    }

    public static function getTranslationFileDirectory() {
        return PIMCORE_PLUGINS_PATH . "/Events/texts";
    }

    /**
     *
     * @param string $language
     * @return string path to the translation file relative to plugin direcory
     */
    public static function getTranslationFile($language) {
            return "/Events/texts/en.csv";
    }

}