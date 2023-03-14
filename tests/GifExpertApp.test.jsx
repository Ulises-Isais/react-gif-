import { fireEvent, render,screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

const newCategory = 'Batman'
//Debe de agregar categorias nuevas:
describe('pruebas en GifExpertApp', () => { 
     test('should no agregar una categoria repetida', () => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory} } );
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3} ).length).toBe(1);

      })
      test('should match snapshot', () => { 
        const { container } = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();  
       })
 });