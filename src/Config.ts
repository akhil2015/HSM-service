export class Config {

  public PORT = 50001;
  public NODE_ENV = "development";
  public SQL = {
    user: "root",
    password: "password",
    database: "ecdsa",
    host: "localhost",
    dialect: "mysql",
  };

  // dev simulation
  public SOFTHSM_CONFIG = {
    library: "/usr/local/lib/softhsm/libsofthsm2.so",
    name: "SoftHSMv2",
    slot: 0,
    readWrite: true,
    pin: "9540"
  };
  public HSM_CONFIG = this.SOFTHSM_CONFIG;
}

