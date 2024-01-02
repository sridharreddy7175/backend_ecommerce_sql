const Sequelize = require("sequelize");
import { Model } from "./Model";
export class UsersModel extends Model {
  constructor() {
    const TABLE_NAME: String = "users";
    super(
      TABLE_NAME,
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        role_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE,
          field: "created_at",
          default: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updated_at",
          default: Sequelize.DATE,
        },
      },
      true
    );
  }
}
