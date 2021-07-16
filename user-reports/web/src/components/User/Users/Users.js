import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import {
  Page,
  Image,
  Text,
  View,
  Document,
  PDFDownloadLink,
  StyleSheet,
} from '@react-pdf/renderer'

import { QUERY } from 'src/components/User/UsersCell'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const GET_USER_PRODUCTS = gql`
  query GetUserProductsQuery($id: Int!) {
    getUserProducts(id: $id) {
      quantity
      name
      imageUrl
      price
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
const UserReport = ({ products }) => (
  <Document>
    {products.map((product) => (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name: {product.name}</Text>
          <Text>Price: {product.price}</Text>
          <Text>Quantity: {product.quantity}</Text>
        </View>
        <View style={styles.section}>
          <Image src={product.imageUrl} />
        </View>
      </Page>
    ))}
  </Document>
)

const UsersList = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { loading, data } = useQuery(GET_USER_PRODUCTS, {
              variables: { id: user.id },
            })
            if (loading) {
              return <div>...</div>
            }
            return (
              <tr key={user.id}>
                <td>{truncate(user.id)}</td>
                <td>{truncate(user.email)}</td>
                <td>{truncate(user.name)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.user({ id: user.id })}
                      title={'Show user ' + user.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editUser({ id: user.id })}
                      title={'Edit user ' + user.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <a
                      href="#"
                      title={'Delete user ' + user.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(user.id)}
                    >
                      Delete
                    </a>
                    <PDFDownloadLink
                      document={<UserReport products={data.getUserProducts} />}
                      fileName={`user_report_${user.id}`}
                    >
                      {({ loading }) =>
                        loading ? 'Generating report...' : 'Download'
                      }
                    </PDFDownloadLink>
                  </nav>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
