import Loading from './Loading'

const FallbackLoading = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        paddingBottom: '100px',
      }}
    >
      <Loading width="150px" height="75px" />
    </div>
  )
}

export default FallbackLoading
