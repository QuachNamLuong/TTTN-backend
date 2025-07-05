import { PrismaClient } from '../generated/prisma/index.js';

/**
 * @typedef {import('@prisma/client').PrismaClient} PrismaClient
 */
class DbClient {
  /**
   * @type {PrismaClient}
   */
  prisma;

  constructor() {
    if (!DbClient.instance) {
      this.prisma = new PrismaClient();
      DbClient.instance = this;
    }
    return DbClient.instance;
  }

  /**
   * @returns {DbClient}
   */
  static getInstance() {
    if (!DbClient.instance) {
      DbClient.instance = new DbClient();
    }
    return DbClient.instance;
  }
}

export default DbClient;
