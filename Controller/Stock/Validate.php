<?php

namespace Areoid\CheckoutValidation\Controller\Stock;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;

class Validate extends Action
{
    public function __construct(
        Context $context
    ) {
        parent::__construct($context);
    }

    public function execute()
    {
        if (!$this->getRequest()->isAjax()) {
            $this->_forward('noroute');
            return;
        }

        // Your logic here

        $result['status'] = true;
        $jsonData = json_encode($result);
        $this->getResponse()->setHeader('Content-type', 'application/json');
        $this->getResponse()->setBody($jsonData);
    }
}