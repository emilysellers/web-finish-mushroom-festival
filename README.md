# Mushroom Festival

## Demo

[Demo App](https://alchemycodelab.github.io/solutions-web/mushroom-festival/)

## Getting Started

Use [this repo](https://github.com/alchemycodelab/web-finish-mushroom-festival) as the starting template for this deliverable.

## Requirements

Oh no, the prior developer ate a bad mushroom and the app is incomplete! Your goal is to write the code needed to get the rest of the app to work properly. Make sure to have at least one a commit for each of the requirements/rubric items.

### Mushrooms

It looks like the mushroom functionality is mostly done, except:

-   in the `displayMushrooms`, the list isn't getting created so the mushrooms aren't displaying.
-   in the `huntMushroomsButton`, the mushroom needs to be added to the mushrooms

See the code for more details...

### Friends

#### Add Friend

The form isn't adding a friend. Look in the `addFriendForm` event listener for more details of what needs to be done...

#### Feed Friend

The most critical app logic isn't done yet, feeding friends mushrooms! Look at the
`friendEl` event listener in `displayFriends` for what needs to be done...

#### Say Goodbye to Full Friend

There's more work to remove full friends, see the `sayGoodbyeButton` event listener for details...

### Bonus

## Rubric

The following is required for your assignment to be graded:

-   PR open from `dev` to `main`
-   PR Passes CI (lint + tests)
-   PR preview on netlify

| Commit with working...                                      |  10 |
| :---------------------------------------------------------- | --: |
| Mushrooms displayed and updated                             |   2 |
| Add Friend - new friends can be added                       |   2 |
| Feed Friend - no feeding if no mushrooms                    |   1 |
| Feed Friend - no feeding full friends                       |   1 |
| Feed Friend - friend fed, satisfaction up, mushroom removed |   2 |
| Say Goodbye - make full friends go bye                      |   2 |

## Stretch Goal Ideas

It's so easy to imagine new features for games.

-   What if there were not just mushrooms, but also delicious berries?
-   What if you could invite friends AND animals to the festival?
-   What if some friends or animals don't like berries, but only like mushrooms and vice versa? And if you feed somebody a berry to somebody who doesn't like berries, they get less happy
-   What if friends had favorite animals (i.e., a pet)? And when that animal gets happier, the friend gets happier, and vice versa?
-   What if there were three trees in the forest, and you clicked on one to figure out where a mushroom is (like hide and seek from day 1?)
-   What if some mushrooms were poison and render differently? And you could only feed them to animals who are resistant to that poison?
-   etc etc etc
