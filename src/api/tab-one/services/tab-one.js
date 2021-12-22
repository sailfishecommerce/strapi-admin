'use strict';

/**
 * tab-one service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tab-one.tab-one');
