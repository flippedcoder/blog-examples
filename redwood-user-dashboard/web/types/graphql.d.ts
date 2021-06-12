export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateTeamInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};





export type Mutation = {
  __typename?: 'Mutation';
  createTeam: Team;
  createUser: User;
  deleteTeam: Team;
  deleteUser: User;
  updateTeam: Team;
  updateUser: User;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteTeamArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateTeamArgs = {
  id: Scalars['Int'];
  input: UpdateTeamInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  redwood?: Maybe<Redwood>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryTeamArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  name: Scalars['String'];
  User: Array<Maybe<User>>;
};


export type UpdateTeamInput = {
  name?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['Int']>;
};

export type Find_Team_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_Team_By_Id = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  )> }
);

export type UpdateTeamMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateTeamInput;
}>;


export type UpdateTeamMutation = (
  { __typename?: 'Mutation' }
  & { updateTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  ) }
);

export type Find_User_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_User_By_Id = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'teamId'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'teamId'>
  ) }
);

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type DeleteTeamMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTeamMutation = (
  { __typename?: 'Mutation' }
  & { deleteTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type TeamsVariables = Exact<{ [key: string]: never; }>;


export type Teams = (
  { __typename?: 'Query' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type UsersVariables = Exact<{ [key: string]: never; }>;


export type Users = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'teamId'>
  )> }
);
