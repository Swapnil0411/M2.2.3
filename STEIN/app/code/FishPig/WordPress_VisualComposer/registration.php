<?php
/**
 * FishPig_WordPress_VisualComposer by Ben Tideswell
 * https://fishpig.co.uk/
 */
	
	use \Magento\Framework\Component\ComponentRegistrar;

	ComponentRegistrar::register(
		ComponentRegistrar::MODULE,
		'FishPig_WordPress_VisualComposer',
		__DIR__
	);

	/*
	 * Protection against installing module in incorrect directory
	**/
	$currentLocation = __DIR__;

	if (strpos($currentLocation, 'app' . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR) !== false) {
		$relativeLocation = 'app' . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR . 'FishPig' . DIRECTORY_SEPARATOR . 'WordPress_VisualComposer';
		
		if (strpos($currentLocation, $relativeLocation) === false) {
			throw new \Exception(sprintf(
				"%s is installed in the wrong folder. Please install the module in %s and make sure that you use the correct capitalisation of the module name (%s).",
				"FishPig_WordPress_VisualComposer",
				$relativeLocation,
				'FishPig' . DIRECTORY_SEPARATOR . 'WordPress_VisualComposer'
			));
		}
	}
