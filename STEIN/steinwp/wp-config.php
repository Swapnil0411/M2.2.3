<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'STEIN_WP');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|34`nsm7m`&6UbK,g&i]h#DP<`;9fDrt`]-C5c(t6jpsFC,]PK`1(!i5<z%k5Ib*');
define('SECURE_AUTH_KEY',  '(wh9/B)oL<S^_cK}:eIGF@#i%^O)NiK!;s:o=`eaha}LrFGadVQmky)Fz)9niMsB');
define('LOGGED_IN_KEY',    'q[/X2C`a9V0m:u#rKY 5>EBMhtoF}nJ#O%%GkU$,4gd/$Qysk3-n/YK]#(%UJ&)@');
define('NONCE_KEY',        'i#]WmY_EA0`{]{ux4Via.hf?-J{aXH[@V#+w;m<SXEU=47^VDM{_xC3.clfpj$vC');
define('AUTH_SALT',        ';@>Zeu>79A$s$w3o`R r-coV70t??]Cqg^lp8D)ub07,+ALn%dvo+i8bhjKj3o L');
define('SECURE_AUTH_SALT', 'hLA@/![af?kXU7] Qb$~#k0x.D,6(KsC9)7xI.g?!}WvLA^* @bn ^j/hdKO dI~');
define('LOGGED_IN_SALT',   'AggPkW.YNGB&P`9*9NzK7=o+ld2:FTmrG?Y,D7GJri:]/yHet&nB_pY.q>zM7bo2');
define('NONCE_SALT',       '&Okg6]W_ W3)!d[ LyT(<44v1Ofx{[jt%}u*- FF<Q,4e,g#6*x-z?osgl$[,mB5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

