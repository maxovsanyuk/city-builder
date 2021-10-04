import { Wrapper } from './styles'
import { Map, GoogleApiWrapper } from 'google-maps-react'

interface LocationProps {
  google: Record<string, any>
  loaded: boolean
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

const LocationComponent = ({ google, loaded }: LocationProps) => {
  if (!loaded) return <div>Loading...</div>

  return (
    <Wrapper>
      <Map
        containerStyle={containerStyle}
        google={google}
        initialCenter={{
          lat: 52.2297,
          lng: 21.0122,
        }}
        onClick={google.onMapClicked}
      />
    </Wrapper>
  )
}

export const LocationInfo = GoogleApiWrapper({
  apiKey: 'AIzaSyDlh-3Gn2gI2rekURoVcFQPvRn2FkXn4vA',
  language: 'en',
})(LocationComponent)

// AIzaSyCgZFSSNRl-UfTZBUEojW8hBrM-ZrmSDL4
