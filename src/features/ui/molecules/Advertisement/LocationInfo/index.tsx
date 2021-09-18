import { Wrapper } from './styles'
import { Map, GoogleApiWrapper } from 'google-maps-react'

interface LocationProps {
  google: Record<string, any>
  loaded: boolean
}

const containerStyle = {
  position: 'relative',
  width: '370px',
  height: '200px',
}

const LocationComponent = ({ google, loaded }: LocationProps) => {
  if (!loaded) return <div>Loading...</div>

  return (
    <Wrapper className="location-info">
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
  apiKey: 'AIzaSyCgZFSSNRl-UfTZBUEojW8hBrM-ZrmSDL4&libraries',
  language: 'en',
})(LocationComponent)
