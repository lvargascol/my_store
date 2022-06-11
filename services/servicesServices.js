class ServicesService {

  constructor(){
    this.services = [
      {
        id: '1',
        service: "Diseño de Cejas",
        category: "Cejas",
        price: 7000,
        durationMin: 5
      },
      {
        id: '2',
        service: "Pigmentación de Cejas",
        category: "Cejas",
        price: 5000,
        durationMin: 15
      },
      {
        id: '3',
        service: "Corte de cabello",
        category: "Cabello",
        price: 20000,
        durationMin: 30
      },
      {
        id: '4',
        service: "Secado de cabello",
        category: "Cabello",
        price: 12000,
        durationMin: 30
      }
    ];

  }

  async create(data) {
    return new Promise((resolve,reject) => {
      const newId = String(this.services.length + 1);
      const newService = {
        id: newId,
        ...data
      }
      this.services.push(newService);
      resolve(newService);
    });
  };

  async find() {
    return new Promise((resolve,reject) => {
      resolve(this.services);
    });

  };
  async findOne(id) {
    return this.services.find(item => item.id === id );
  };

  async update(id,changes) {
    const index = this.services.findIndex(item => item.id === id );
    if (index === -1) {
      throw new Error('service not found');
    }
    const service = this.services[index];
    this.services[index] = {
      ...service,
      ...changes
    };
    return this.services[index];
  };

  async delete(id) {
    const index = this.services.findIndex(item => item.id === id );
    if (index === -1) {
      throw new Error('service not found');
    }
    this.services.splice(index,1);
    return { id };
  };
};

module.exports = ServicesService;
