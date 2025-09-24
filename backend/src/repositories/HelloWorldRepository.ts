import { IHelloWorldRepository } from "./interfaces/IHelloWorldRepository"

class HelloWorldRepository implements IHelloWorldRepository {
  public getMessage(): string {
    return 'Hello, World!'
  }
}

export { HelloWorldRepository }
