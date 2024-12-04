const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class ReportingServices {

    constructor() {};

    async create(data) {
        const tempReporting = await sequelize.query(
            `SELECT S.product, S.clientName, T.name
             FROM sell AS S
             INNER JOIN sellType AS T ON S.idTable = T.id
             WHERE (:clientName IS NULL OR S.clientName = :clientName)
             AND S.create_at BETWEEN :startDate AND :endDate`,
            {
              replacements: {
                clientName: data.clientName || null, // Pasa NULL si no se proporciona clientName
                startDate: data.startDate,
                endDate: data.endDate,
              },
              type: sequelize.QueryTypes.SELECT,
            }
          );
        return tempReporting;
    }
}

module.exports = ReportingServices;