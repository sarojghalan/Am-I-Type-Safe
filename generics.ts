// generics with tuple
function simpleStateFunc<T>(initial: T): [() => T, (v: T) => void] {
  let str = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}
const [strGetter, strSetter] = simpleStateFunc<string | null>("null");

// interface with generics
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

// function with generics
function ranker<RankItem>(
  item: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  // over-riding types
  const ranks: Rank<RankItem>[] = item.map((item) => ({
    item,
    rank: rank(item),
  }));
  let sortedRank = ranks.sort((a, b) => b.rank - a.rank);

  return sortedRank.map((item) => item.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemonArr: Pokemon[] = [
  {
    name: "Barbasaur",
    hp: 10,
  },
  {
    name: "Megasaur",
    hp: 20,
  },
];

const PokemonRanker = ranker(pokemonArr, ({ hp }) => hp);
console.log(PokemonRanker);


