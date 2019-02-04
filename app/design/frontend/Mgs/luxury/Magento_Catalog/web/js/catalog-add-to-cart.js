/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'mage/translate',
    'jquery/ui'
], function($, $t) {
    "use strict";

    $.widget('mage.catalogAddToCart', {

        options: {
            processStart: null,
            processStop: null,
            bindSubmit: true,
            minicartSelector: '[data-block="minicart"]',
            messagesSelector: '[data-placeholder="messages"]',
            productStatusSelector: '.stock.available',
            addToCartButtonSelector: '.action.tocart',
            addToCartButtonDisabledClass: 'disabled',
            addToCartButtonTextWhileAdding: $t('fa fa-spinner fa-pulse'),
			addToCartButtonTextWhileAdding_quickview: $t('Adding...'),
            addToCartButtonTextAdded: $t('Added'),
            addToCartButtonTextDefault: $t('Add to Cart')

        },

        _create: function() {
            if (this.options.bindSubmit) {
                this._bindSubmit();
            }
        },

        _bindSubmit: function() {
            var self = this;
            this.element.on('submit', function(e) {
                e.preventDefault();
                self.submitForm($(this));
            });
        },

        isLoaderEnabled: function() {
            return this.options.processStart && this.options.processStop;
        },

        submitForm: function(form) {
            var self = this;
            if (form.has('input[type="file"]').length && form.find('input[type="file"]').val() !== '') {
                self.element.off('submit');
                form.submit();
            } else {
                self.ajaxSubmit(form);
            }
        },

        ajaxSubmit: function(form) {
            var self = this;
            $(self.options.minicartSelector).trigger('contentLoading');
            self.disableAddToCartButton(form);
            
            jQuery('.ajaxcart-popup').hide();  
			jQuery('.catalog-product-view #ajaxcartProcessing').show();			
			if(jQuery('body').find('.mgs-quickview-catalog-product-view')){
				jQuery('.mgs-quickview-catalog-product-view #ajaxcartProcessing').hide();
			}			

            $.ajax({
                url: form.attr('action'),
                data: form.serialize(),
                type: 'post',
                dataType: 'json',
                beforeSend: function() {
                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStart);
                    }
                },
                success: function(res) {
                    jQuery('.ajaxcart-popup').hide();
                    
                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStop);
                    }

                    if (res.backUrl) {
                        window.location = res.backUrl;
                        return;
                    }
                    if (res.messages) {
                        $(self.options.messagesSelector).html(res.messages);
                    }
                    if (res.minicart) {
                        $(self.options.minicartSelector).replaceWith(res.minicart);
                        $(self.options.minicartSelector).trigger('contentUpdated');
                    }
                    if (res.product && res.product.statusText) {
                        $(self.options.productStatusSelector)
                            .removeClass('available')
                            .addClass('unavailable')
                            .find('span')
                            .html(res.product.statusText);
                    }
                    self.enableAddToCartButton(form);
                    
					jQuery('.catalog-product-view #ajaxcartCompleted').show();
					if(jQuery('body').find('.mgs-quickview-catalog-product-view')){
						jQuery('.mgs-quickview-catalog-product-view #ajaxcartCompleted').hide();
					}	
                }
            });
        },

        disableAddToCartButton: function(form) {
            var addToCartButton = $(form).find(this.options.addToCartButtonSelector);
            addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
			addToCartButton.find('.fa').removeClass('fa-shopping-cart');
            addToCartButton.find('.fa').addClass('fa-spinner fa-pulse');
			
            $('.mgs-quickview-catalog-product-view .action.tocart').addClass(this.options.addToCartButtonDisabledClass);
            $('.mgs-quickview-catalog-product-view .action.tocart').attr('title', this.options.addToCartButtonTextWhileAdding_quickview);
            $('.mgs-quickview-catalog-product-view .action.tocart').find('span').text(this.options.addToCartButtonTextWhileAdding_quickview);
        },

        enableAddToCartButton: function(form) {
            var self = this,
                addToCartButton = $(form).find(this.options.addToCartButtonSelector);
			
			addToCartButton.find('.fa').addClass('fa-check');
            addToCartButton.find('.fa').removeClass('fa-spinner fa-pulse');
			$('.mgs-quickview-catalog-product-view .action.tocart').find('span').text(this.options.addToCartButtonTextAdded);
            $('.mgs-quickview-catalog-product-view .action.tocart').attr('title', this.options.addToCartButtonTextAdded);

            setTimeout(function() {
                addToCartButton.removeClass(self.options.addToCartButtonDisabledClass);
				addToCartButton.find('.fa').removeClass('fa-spinner fa-pulse');
				addToCartButton.find('.fa').removeClass('fa-check');
				addToCartButton.find('.fa').addClass('fa-shopping-cart');
				$('.mgs-quickview-catalog-product-view .action.tocart').find('span').text(self.options.addToCartButtonTextDefault);
				$('.mgs-quickview-catalog-product-view .action.tocart').attr('title', self.options.addToCartButtonTextDefault);
            }, 1000);
        }
    });

    return $.mage.catalogAddToCart;
});