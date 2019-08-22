// Code generated by Prisma (prisma@1.34.6). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  attack: (where?: AttackWhereInput) => Promise<boolean>;
  pokemon: (where?: PokemonWhereInput) => Promise<boolean>;
  pokemonAttack: (where?: PokemonAttackWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  attack: (where: AttackWhereUniqueInput) => AttackNullablePromise;
  attacks: (args?: {
    where?: AttackWhereInput;
    orderBy?: AttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Attack>;
  attacksConnection: (args?: {
    where?: AttackWhereInput;
    orderBy?: AttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AttackConnectionPromise;
  pokemon: (where: PokemonWhereUniqueInput) => PokemonNullablePromise;
  pokemons: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Pokemon>;
  pokemonsConnection: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PokemonConnectionPromise;
  pokemonAttack: (
    where: PokemonAttackWhereUniqueInput
  ) => PokemonAttackNullablePromise;
  pokemonAttacks: (args?: {
    where?: PokemonAttackWhereInput;
    orderBy?: PokemonAttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<PokemonAttack>;
  pokemonAttacksConnection: (args?: {
    where?: PokemonAttackWhereInput;
    orderBy?: PokemonAttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PokemonAttackConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAttack: (data: AttackCreateInput) => AttackPromise;
  updateAttack: (args: {
    data: AttackUpdateInput;
    where: AttackWhereUniqueInput;
  }) => AttackPromise;
  updateManyAttacks: (args: {
    data: AttackUpdateManyMutationInput;
    where?: AttackWhereInput;
  }) => BatchPayloadPromise;
  upsertAttack: (args: {
    where: AttackWhereUniqueInput;
    create: AttackCreateInput;
    update: AttackUpdateInput;
  }) => AttackPromise;
  deleteAttack: (where: AttackWhereUniqueInput) => AttackPromise;
  deleteManyAttacks: (where?: AttackWhereInput) => BatchPayloadPromise;
  createPokemon: (data: PokemonCreateInput) => PokemonPromise;
  updatePokemon: (args: {
    data: PokemonUpdateInput;
    where: PokemonWhereUniqueInput;
  }) => PokemonPromise;
  updateManyPokemons: (args: {
    data: PokemonUpdateManyMutationInput;
    where?: PokemonWhereInput;
  }) => BatchPayloadPromise;
  upsertPokemon: (args: {
    where: PokemonWhereUniqueInput;
    create: PokemonCreateInput;
    update: PokemonUpdateInput;
  }) => PokemonPromise;
  deletePokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  deleteManyPokemons: (where?: PokemonWhereInput) => BatchPayloadPromise;
  createPokemonAttack: (data: PokemonAttackCreateInput) => PokemonAttackPromise;
  updatePokemonAttack: (args: {
    data: PokemonAttackUpdateInput;
    where: PokemonAttackWhereUniqueInput;
  }) => PokemonAttackPromise;
  upsertPokemonAttack: (args: {
    where: PokemonAttackWhereUniqueInput;
    create: PokemonAttackCreateInput;
    update: PokemonAttackUpdateInput;
  }) => PokemonAttackPromise;
  deletePokemonAttack: (
    where: PokemonAttackWhereUniqueInput
  ) => PokemonAttackPromise;
  deleteManyPokemonAttacks: (
    where?: PokemonAttackWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  attack: (
    where?: AttackSubscriptionWhereInput
  ) => AttackSubscriptionPayloadSubscription;
  pokemon: (
    where?: PokemonSubscriptionWhereInput
  ) => PokemonSubscriptionPayloadSubscription;
  pokemonAttack: (
    where?: PokemonAttackSubscriptionWhereInput
  ) => PokemonAttackSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AttackOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "damage_ASC"
  | "damage_DESC";

export type PokemonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "number_ASC"
  | "number_DESC"
  | "name_ASC"
  | "name_DESC";

export type PokemonAttackOrderByInput = "id_ASC" | "id_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AttackWhereUniqueInput = AtLeastOne<{
  id: Maybe<Int>;
}>;

export interface AttackWhereInput {
  id?: Maybe<Int>;
  id_not?: Maybe<Int>;
  id_in?: Maybe<Int[] | Int>;
  id_not_in?: Maybe<Int[] | Int>;
  id_lt?: Maybe<Int>;
  id_lte?: Maybe<Int>;
  id_gt?: Maybe<Int>;
  id_gte?: Maybe<Int>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  damage?: Maybe<String>;
  damage_not?: Maybe<String>;
  damage_in?: Maybe<String[] | String>;
  damage_not_in?: Maybe<String[] | String>;
  damage_lt?: Maybe<String>;
  damage_lte?: Maybe<String>;
  damage_gt?: Maybe<String>;
  damage_gte?: Maybe<String>;
  damage_contains?: Maybe<String>;
  damage_not_contains?: Maybe<String>;
  damage_starts_with?: Maybe<String>;
  damage_not_starts_with?: Maybe<String>;
  damage_ends_with?: Maybe<String>;
  damage_not_ends_with?: Maybe<String>;
  AND?: Maybe<AttackWhereInput[] | AttackWhereInput>;
  OR?: Maybe<AttackWhereInput[] | AttackWhereInput>;
  NOT?: Maybe<AttackWhereInput[] | AttackWhereInput>;
}

export type PokemonWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  number?: Maybe<Int>;
}>;

export interface PokemonWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  number?: Maybe<Int>;
  number_not?: Maybe<Int>;
  number_in?: Maybe<Int[] | Int>;
  number_not_in?: Maybe<Int[] | Int>;
  number_lt?: Maybe<Int>;
  number_lte?: Maybe<Int>;
  number_gt?: Maybe<Int>;
  number_gte?: Maybe<Int>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  attacks?: Maybe<PokemonAttackWhereInput>;
  AND?: Maybe<PokemonWhereInput[] | PokemonWhereInput>;
  OR?: Maybe<PokemonWhereInput[] | PokemonWhereInput>;
  NOT?: Maybe<PokemonWhereInput[] | PokemonWhereInput>;
}

export interface PokemonAttackWhereInput {
  id?: Maybe<Int>;
  id_not?: Maybe<Int>;
  id_in?: Maybe<Int[] | Int>;
  id_not_in?: Maybe<Int[] | Int>;
  id_lt?: Maybe<Int>;
  id_lte?: Maybe<Int>;
  id_gt?: Maybe<Int>;
  id_gte?: Maybe<Int>;
  special_every?: Maybe<AttackWhereInput>;
  special_some?: Maybe<AttackWhereInput>;
  special_none?: Maybe<AttackWhereInput>;
  AND?: Maybe<PokemonAttackWhereInput[] | PokemonAttackWhereInput>;
  OR?: Maybe<PokemonAttackWhereInput[] | PokemonAttackWhereInput>;
  NOT?: Maybe<PokemonAttackWhereInput[] | PokemonAttackWhereInput>;
}

export type PokemonAttackWhereUniqueInput = AtLeastOne<{
  id: Maybe<Int>;
}>;

export interface AttackCreateInput {
  id?: Maybe<Int>;
  name?: Maybe<String>;
  damage?: Maybe<String>;
}

export interface AttackUpdateInput {
  name?: Maybe<String>;
  damage?: Maybe<String>;
}

export interface AttackUpdateManyMutationInput {
  name?: Maybe<String>;
  damage?: Maybe<String>;
}

export interface PokemonCreateInput {
  id?: Maybe<ID_Input>;
  number: Int;
  name: String;
  attacks?: Maybe<PokemonAttackCreateOneInput>;
}

export interface PokemonAttackCreateOneInput {
  create?: Maybe<PokemonAttackCreateInput>;
  connect?: Maybe<PokemonAttackWhereUniqueInput>;
}

export interface PokemonAttackCreateInput {
  id?: Maybe<Int>;
  special?: Maybe<AttackCreateManyInput>;
}

export interface AttackCreateManyInput {
  create?: Maybe<AttackCreateInput[] | AttackCreateInput>;
  connect?: Maybe<AttackWhereUniqueInput[] | AttackWhereUniqueInput>;
}

export interface PokemonUpdateInput {
  number?: Maybe<Int>;
  name?: Maybe<String>;
  attacks?: Maybe<PokemonAttackUpdateOneInput>;
}

export interface PokemonAttackUpdateOneInput {
  create?: Maybe<PokemonAttackCreateInput>;
  update?: Maybe<PokemonAttackUpdateDataInput>;
  upsert?: Maybe<PokemonAttackUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<PokemonAttackWhereUniqueInput>;
}

export interface PokemonAttackUpdateDataInput {
  special?: Maybe<AttackUpdateManyInput>;
}

export interface AttackUpdateManyInput {
  create?: Maybe<AttackCreateInput[] | AttackCreateInput>;
  update?: Maybe<
    | AttackUpdateWithWhereUniqueNestedInput[]
    | AttackUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | AttackUpsertWithWhereUniqueNestedInput[]
    | AttackUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<AttackWhereUniqueInput[] | AttackWhereUniqueInput>;
  connect?: Maybe<AttackWhereUniqueInput[] | AttackWhereUniqueInput>;
  set?: Maybe<AttackWhereUniqueInput[] | AttackWhereUniqueInput>;
  disconnect?: Maybe<AttackWhereUniqueInput[] | AttackWhereUniqueInput>;
  deleteMany?: Maybe<AttackScalarWhereInput[] | AttackScalarWhereInput>;
  updateMany?: Maybe<
    | AttackUpdateManyWithWhereNestedInput[]
    | AttackUpdateManyWithWhereNestedInput
  >;
}

export interface AttackUpdateWithWhereUniqueNestedInput {
  where: AttackWhereUniqueInput;
  data: AttackUpdateDataInput;
}

export interface AttackUpdateDataInput {
  name?: Maybe<String>;
  damage?: Maybe<String>;
}

export interface AttackUpsertWithWhereUniqueNestedInput {
  where: AttackWhereUniqueInput;
  update: AttackUpdateDataInput;
  create: AttackCreateInput;
}

export interface AttackScalarWhereInput {
  id?: Maybe<Int>;
  id_not?: Maybe<Int>;
  id_in?: Maybe<Int[] | Int>;
  id_not_in?: Maybe<Int[] | Int>;
  id_lt?: Maybe<Int>;
  id_lte?: Maybe<Int>;
  id_gt?: Maybe<Int>;
  id_gte?: Maybe<Int>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  damage?: Maybe<String>;
  damage_not?: Maybe<String>;
  damage_in?: Maybe<String[] | String>;
  damage_not_in?: Maybe<String[] | String>;
  damage_lt?: Maybe<String>;
  damage_lte?: Maybe<String>;
  damage_gt?: Maybe<String>;
  damage_gte?: Maybe<String>;
  damage_contains?: Maybe<String>;
  damage_not_contains?: Maybe<String>;
  damage_starts_with?: Maybe<String>;
  damage_not_starts_with?: Maybe<String>;
  damage_ends_with?: Maybe<String>;
  damage_not_ends_with?: Maybe<String>;
  AND?: Maybe<AttackScalarWhereInput[] | AttackScalarWhereInput>;
  OR?: Maybe<AttackScalarWhereInput[] | AttackScalarWhereInput>;
  NOT?: Maybe<AttackScalarWhereInput[] | AttackScalarWhereInput>;
}

export interface AttackUpdateManyWithWhereNestedInput {
  where: AttackScalarWhereInput;
  data: AttackUpdateManyDataInput;
}

export interface AttackUpdateManyDataInput {
  name?: Maybe<String>;
  damage?: Maybe<String>;
}

export interface PokemonAttackUpsertNestedInput {
  update: PokemonAttackUpdateDataInput;
  create: PokemonAttackCreateInput;
}

export interface PokemonUpdateManyMutationInput {
  number?: Maybe<Int>;
  name?: Maybe<String>;
}

export interface PokemonAttackUpdateInput {
  special?: Maybe<AttackUpdateManyInput>;
}

export interface AttackSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AttackWhereInput>;
  AND?: Maybe<AttackSubscriptionWhereInput[] | AttackSubscriptionWhereInput>;
  OR?: Maybe<AttackSubscriptionWhereInput[] | AttackSubscriptionWhereInput>;
  NOT?: Maybe<AttackSubscriptionWhereInput[] | AttackSubscriptionWhereInput>;
}

export interface PokemonSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PokemonWhereInput>;
  AND?: Maybe<PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput>;
  OR?: Maybe<PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput>;
  NOT?: Maybe<PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput>;
}

export interface PokemonAttackSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PokemonAttackWhereInput>;
  AND?: Maybe<
    PokemonAttackSubscriptionWhereInput[] | PokemonAttackSubscriptionWhereInput
  >;
  OR?: Maybe<
    PokemonAttackSubscriptionWhereInput[] | PokemonAttackSubscriptionWhereInput
  >;
  NOT?: Maybe<
    PokemonAttackSubscriptionWhereInput[] | PokemonAttackSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Attack {
  id: Int;
  name?: String;
  damage?: String;
}

export interface AttackPromise extends Promise<Attack>, Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
  damage: () => Promise<String>;
}

export interface AttackSubscription
  extends Promise<AsyncIterator<Attack>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  damage: () => Promise<AsyncIterator<String>>;
}

export interface AttackNullablePromise
  extends Promise<Attack | null>,
    Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
  damage: () => Promise<String>;
}

export interface AttackConnection {
  pageInfo: PageInfo;
  edges: AttackEdge[];
}

export interface AttackConnectionPromise
  extends Promise<AttackConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AttackEdge>>() => T;
  aggregate: <T = AggregateAttackPromise>() => T;
}

export interface AttackConnectionSubscription
  extends Promise<AsyncIterator<AttackConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AttackEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAttackSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AttackEdge {
  node: Attack;
  cursor: String;
}

export interface AttackEdgePromise extends Promise<AttackEdge>, Fragmentable {
  node: <T = AttackPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AttackEdgeSubscription
  extends Promise<AsyncIterator<AttackEdge>>,
    Fragmentable {
  node: <T = AttackSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAttack {
  count: Int;
}

export interface AggregateAttackPromise
  extends Promise<AggregateAttack>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAttackSubscription
  extends Promise<AsyncIterator<AggregateAttack>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Pokemon {
  id: ID_Output;
  number: Int;
  name: String;
}

export interface PokemonPromise extends Promise<Pokemon>, Fragmentable {
  id: () => Promise<ID_Output>;
  number: () => Promise<Int>;
  name: () => Promise<String>;
  attacks: <T = PokemonAttackPromise>() => T;
}

export interface PokemonSubscription
  extends Promise<AsyncIterator<Pokemon>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  number: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  attacks: <T = PokemonAttackSubscription>() => T;
}

export interface PokemonNullablePromise
  extends Promise<Pokemon | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  number: () => Promise<Int>;
  name: () => Promise<String>;
  attacks: <T = PokemonAttackPromise>() => T;
}

export interface PokemonAttack {
  id: Int;
}

export interface PokemonAttackPromise
  extends Promise<PokemonAttack>,
    Fragmentable {
  id: () => Promise<Int>;
  special: <T = FragmentableArray<Attack>>(args?: {
    where?: AttackWhereInput;
    orderBy?: AttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PokemonAttackSubscription
  extends Promise<AsyncIterator<PokemonAttack>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
  special: <T = Promise<AsyncIterator<AttackSubscription>>>(args?: {
    where?: AttackWhereInput;
    orderBy?: AttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PokemonAttackNullablePromise
  extends Promise<PokemonAttack | null>,
    Fragmentable {
  id: () => Promise<Int>;
  special: <T = FragmentableArray<Attack>>(args?: {
    where?: AttackWhereInput;
    orderBy?: AttackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PokemonConnection {
  pageInfo: PageInfo;
  edges: PokemonEdge[];
}

export interface PokemonConnectionPromise
  extends Promise<PokemonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PokemonEdge>>() => T;
  aggregate: <T = AggregatePokemonPromise>() => T;
}

export interface PokemonConnectionSubscription
  extends Promise<AsyncIterator<PokemonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PokemonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePokemonSubscription>() => T;
}

export interface PokemonEdge {
  node: Pokemon;
  cursor: String;
}

export interface PokemonEdgePromise extends Promise<PokemonEdge>, Fragmentable {
  node: <T = PokemonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PokemonEdgeSubscription
  extends Promise<AsyncIterator<PokemonEdge>>,
    Fragmentable {
  node: <T = PokemonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePokemon {
  count: Int;
}

export interface AggregatePokemonPromise
  extends Promise<AggregatePokemon>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePokemonSubscription
  extends Promise<AsyncIterator<AggregatePokemon>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PokemonAttackConnection {
  pageInfo: PageInfo;
  edges: PokemonAttackEdge[];
}

export interface PokemonAttackConnectionPromise
  extends Promise<PokemonAttackConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PokemonAttackEdge>>() => T;
  aggregate: <T = AggregatePokemonAttackPromise>() => T;
}

export interface PokemonAttackConnectionSubscription
  extends Promise<AsyncIterator<PokemonAttackConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PokemonAttackEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePokemonAttackSubscription>() => T;
}

export interface PokemonAttackEdge {
  node: PokemonAttack;
  cursor: String;
}

export interface PokemonAttackEdgePromise
  extends Promise<PokemonAttackEdge>,
    Fragmentable {
  node: <T = PokemonAttackPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PokemonAttackEdgeSubscription
  extends Promise<AsyncIterator<PokemonAttackEdge>>,
    Fragmentable {
  node: <T = PokemonAttackSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePokemonAttack {
  count: Int;
}

export interface AggregatePokemonAttackPromise
  extends Promise<AggregatePokemonAttack>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePokemonAttackSubscription
  extends Promise<AsyncIterator<AggregatePokemonAttack>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AttackSubscriptionPayload {
  mutation: MutationType;
  node: Attack;
  updatedFields: String[];
  previousValues: AttackPreviousValues;
}

export interface AttackSubscriptionPayloadPromise
  extends Promise<AttackSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AttackPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AttackPreviousValuesPromise>() => T;
}

export interface AttackSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AttackSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AttackSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AttackPreviousValuesSubscription>() => T;
}

export interface AttackPreviousValues {
  id: Int;
  name?: String;
  damage?: String;
}

export interface AttackPreviousValuesPromise
  extends Promise<AttackPreviousValues>,
    Fragmentable {
  id: () => Promise<Int>;
  name: () => Promise<String>;
  damage: () => Promise<String>;
}

export interface AttackPreviousValuesSubscription
  extends Promise<AsyncIterator<AttackPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  damage: () => Promise<AsyncIterator<String>>;
}

export interface PokemonSubscriptionPayload {
  mutation: MutationType;
  node: Pokemon;
  updatedFields: String[];
  previousValues: PokemonPreviousValues;
}

export interface PokemonSubscriptionPayloadPromise
  extends Promise<PokemonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PokemonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PokemonPreviousValuesPromise>() => T;
}

export interface PokemonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PokemonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PokemonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PokemonPreviousValuesSubscription>() => T;
}

export interface PokemonPreviousValues {
  id: ID_Output;
  number: Int;
  name: String;
}

export interface PokemonPreviousValuesPromise
  extends Promise<PokemonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  number: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface PokemonPreviousValuesSubscription
  extends Promise<AsyncIterator<PokemonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  number: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PokemonAttackSubscriptionPayload {
  mutation: MutationType;
  node: PokemonAttack;
  updatedFields: String[];
  previousValues: PokemonAttackPreviousValues;
}

export interface PokemonAttackSubscriptionPayloadPromise
  extends Promise<PokemonAttackSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PokemonAttackPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PokemonAttackPreviousValuesPromise>() => T;
}

export interface PokemonAttackSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PokemonAttackSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PokemonAttackSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PokemonAttackPreviousValuesSubscription>() => T;
}

export interface PokemonAttackPreviousValues {
  id: Int;
}

export interface PokemonAttackPreviousValuesPromise
  extends Promise<PokemonAttackPreviousValues>,
    Fragmentable {
  id: () => Promise<Int>;
}

export interface PokemonAttackPreviousValuesSubscription
  extends Promise<AsyncIterator<PokemonAttackPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Pokemon",
    embedded: false
  },
  {
    name: "PokemonAttack",
    embedded: false
  },
  {
    name: "Attack",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
