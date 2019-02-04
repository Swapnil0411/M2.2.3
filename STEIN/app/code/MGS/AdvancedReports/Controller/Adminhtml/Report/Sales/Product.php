<?php

namespace MGS\AdvancedReports\Controller\Adminhtml\Report\Sales;

use MGS\AdvancedReports\Controller\Adminhtml\Report\Sales;
use Magento\Reports\Model\Flag;

class Product extends Sales
{
    public function execute()
    {
        $this->_showLastExecutionTime(Flag::REPORT_ORDER_FLAG_CODE, 'sales');
        $this->_initAction()->_setActiveMenu(
            'MGS_AdvancedReports::advancedreports_salesbyproduct'
        )->_addBreadcrumb(
            __('Sales By Product'),
            __('Sales By Product')
        );
        $this->_view->getPage()->getConfig()->getTitle()->prepend(__('Sales By Product'));
        $gridBlock = $this->_view->getLayout()->getBlock('adminhtml_sales_product.grid');
        $filterFormBlock = $this->_view->getLayout()->getBlock('grid.filter.form');
        $this->_initReportAction([$gridBlock, $filterFormBlock]);
        $this->_view->renderLayout();
    }
}
