import { render, screen} from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => { 

    const title = 'Batman';
    const url = 'https://batman.com/'
    test('debe de hacer match con el snapshot ', () => { 

     const { container } =  render( <GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     });
     test('debe de mostrar la imagen con el url y rl alt indicado ', () => { 
        
        render( <GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').src).toBe( url );
        const { src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt);
      });

      test('debe de mostrar el titulo en el component', () => { 
       
        render( <GifItem title={title} url={url} />);
        expect(screen.getByText( title ) ).toBeTruthy();
       })
});
