import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Conectado a la base de datos");

    app.listen(PORT, () => {
      console.log(`🚀 Auth Service corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
}

startServer();
