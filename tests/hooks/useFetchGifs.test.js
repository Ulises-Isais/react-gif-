import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => { 
  
  test('should de regresar el estado inicial', () => { 
    
   const { result }=  renderHook( () => useFetchGifs('Batman'))
   const {images, isLoading } = result.current;
    
    expect( images.length).toBe(0);
    expect( isLoading ).toBeTruthy();
    
  })

  test('should de retornar un arreglo de imagenes y el isloading en false', async() => { 
   const { result }=  renderHook( () => useFetchGifs('Batman'))
    
   await waitFor(
    () => expect( result.current.images.length ).toBeGreaterThan(0)
    
   );
   const {images, isLoading } = result.current;
    
    expect( images.length).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
   });
 })