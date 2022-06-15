import { TransbankOneClickPaymentMethod } from "#src/modules/payment-method/insfrastructure/transbank/one-click/payment-method";
import { NodeServer } from "#src/modules/server/infrastructure/vanilla/server";
import { Container } from "#src/shared/domain/service/dependency-injection/index";

export const registerDependencies = () => {
  Container
    .register('PaymentMethod', new TransbankOneClickPaymentMethod())
    .register('Server', new NodeServer())
}