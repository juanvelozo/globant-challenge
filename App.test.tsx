import App from "./App";
import {render, fireEvent} from '@testing-library/react-native'

describe(App, ()=>{
    it('should render React Native image', ()=>{
        const {getByTestId} = render(<App/>)
        const image = getByTestId('RnMLogo')
        expect(image).toBeTruthy()
    })
})