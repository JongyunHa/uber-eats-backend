import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  // graphql 에서 list를 명시하는방법
  @Query((returns) => [Restaurant])
  // typescript 에서 list를 명시하는 방법
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
  @Mutation((returns) => Boolean)
  createRestaurant(
    @Args() createRestaurantInput: CreateRestaurantDto,
  ): boolean {
    console.log(createRestaurantInput);
    return true;
  }
}
