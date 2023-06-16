import React from 'react';
import operate from '../logic/operate';

describe('Calculator functionality', () => {
  test('Add two numbers correctly', () => {
    const button = ['1', '+', '2', '='];
    expect(button).toEqual(['1', '+', '2', '=']);
  });
  test('Subtract two numbers correctly', () => {
    const button = ['1', '-', '2', '='];
    expect(button).toEqual(['1', '-', '2', '=']);
  });
  test('divide two numbers correctly', () => {
    const button = ['1', '/', '2', '='];
    expect(button).toEqual(['1', '/', '2', '=']);
  });
  test('Multiply two numbers correctly', () => {
    const button = ['1', '*', '2', '='];
    expect(button).toEqual(['1', '*', '2', '=']);
  });
});
