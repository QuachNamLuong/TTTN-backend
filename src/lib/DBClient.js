import { PrismaClient } from '../generated/prisma/index.js';

class DBClient {
  constructor() {
    if (!DBClient.instance) {
      this.prisma = new PrismaClient();
      DBClient.instance = this;
    }
    return DBClient.instance;
  }

  static getInstance() {
    if (!DBClient.instance) {
      DBClient.instance = new DBClient();
    }
    return DBClient.instance;
  }
}

export default DBClient;