import Api from "./api";
import services from "services";
import Storage from "./storage";

export default class ServiceFactory {
  static async call(serviceUrl, params = {}) {
    const urlParts = serviceUrl.split("/");

    if (urlParts.length === 2) {
      const method = urlParts[1];
      const service = ServiceFactory._memoizeAndReturnInstance(urlParts[0]);

      if (!service) {
        throw new Error(`Service not found: ${urlParts[0]}`);
      }

      if (typeof service[method] !== "function") {
        throw new Error(`Service method not found: ${method}`);
      }

      return await service[method].call(service, params);
    } else {
      throw new Error(`Invalid service url format: ${serviceUrl}`);
    }
  }

  static _memoizeAndReturnInstance(service) {
    const ServiceClass = services[service];
    const storage = Storage.getInstance();

    if (!ServiceClass) {
      throw new Error(`Service "${service}" not found.`);
    }

    if (!ServiceFactory[service]) {
      ServiceFactory[service] = new ServiceClass(storage, Api);
    }

    return ServiceFactory[service];
  }
}
