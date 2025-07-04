import { PrismaClient } from '../generated/prisma/index.js';

/**
 * @typedef {import('@prisma/client').PrismaClient} PrismaClient
 */
class DBClient {
  /**
   * @type {PrismaClient}
   */
  prisma;

  constructor() {
    if (!DBClient.instance) {
      this.prisma = new PrismaClient();
      DBClient.instance = this;
    }
    return DBClient.instance;
  }

  /**
   * @returns {DBClient}
   */
  static getInstance() {
    if (!DBClient.instance) {
      DBClient.instance = new DBClient();
    }
    return DBClient.instance;
  }
}

export default DBClient;
