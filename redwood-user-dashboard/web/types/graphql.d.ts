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

export type Alert = {
  __typename?: 'Alert';
  id: Scalars['Int'];
  name: Scalars['String'];
  priority: Scalars['String'];
  team: Team;
  teamId: Scalars['Int'];
};

export type CreateAlertInput = {
  name: Scalars['String'];
  priority: Scalars['String'];
  teamId: Scalars['Int'];
};

export type CreateTeamInput = {
  name: Scalars['String'];
  teamImg?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};





export type Mutation = {
  __typename?: 'Mutation';
  createAlert: Alert;
  createTeam: Team;
  createUser: User;
  deleteAlert: Alert;
  deleteTeam: Team;
  deleteUser: User;
  updateAlert: Alert;
  updateTeam: Team;
  updateUser: User;
};


export type MutationCreateAlertArgs = {
  input: CreateAlertInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlertArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAlertArgs = {
  id: Scalars['Int'];
  input: UpdateAlertInput;
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
  alert?: Maybe<Alert>;
  alerts: Array<Alert>;
  redwood?: Maybe<Redwood>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAlertArgs = {
  id: Scalars['Int'];
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
  teamImg?: Maybe<Scalars['String']>;
};


export type UpdateAlertInput = {
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type UpdateTeamInput = {
  name?: Maybe<Scalars['String']>;
  teamImg?: Maybe<Scalars['String']>;
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

export type DeleteAlertMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAlertMutation = (
  { __typename?: 'Mutation' }
  & { deleteAlert: (
    { __typename?: 'Alert' }
    & Pick<Alert, 'id'>
  ) }
);

export type Find_Alert_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_Alert_By_Id = (
  { __typename?: 'Query' }
  & { alert?: Maybe<(
    { __typename?: 'Alert' }
    & Pick<Alert, 'id' | 'name' | 'priority' | 'teamId'>
  )> }
);

export type AlertsVariables = Exact<{ [key: string]: never; }>;


export type Alerts = (
  { __typename?: 'Query' }
  & { alerts: Array<(
    { __typename?: 'Alert' }
    & Pick<Alert, 'id' | 'name' | 'priority' | 'teamId'>
  )> }
);

export type UpdateAlertMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateAlertInput;
}>;


export type UpdateAlertMutation = (
  { __typename?: 'Mutation' }
  & { updateAlert: (
    { __typename?: 'Alert' }
    & Pick<Alert, 'id' | 'name' | 'priority' | 'teamId'>
  ) }
);

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

export type CreateAlertMutationVariables = Exact<{
  input: CreateAlertInput;
}>;


export type CreateAlertMutation = (
  { __typename?: 'Mutation' }
  & { createAlert: (
    { __typename?: 'Alert' }
    & Pick<Alert, 'id'>
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
