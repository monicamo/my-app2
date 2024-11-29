import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

/**
 * estratégia de reutilização de rotas personalizada
 */
export class CustomReuseStrategy extends BaseRouteReuseStrategy {

  /**
   * O método shouldReuseRoute é responsável por determinar se a rota atual pode ser reutilizada ou não.
   * Neste caso, a implementação personalizada verifica se a rota futura possui a
   * propriedade reuseComponent definido no objeto data.
   * Se a propriedade estiver definida como true, a rota pode ser reutilizada.
   * Caso contrário, a rota será tratada como uma nova rota e o componente correspondente será criado novamente.
   * @param future
   * @param curr
   * @returns
   */
  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data['reuseComponent'];
  }
}
