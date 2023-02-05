/// <reference types="cypress" />

describe('Tarefas', () => {

    context('Cadastro', () => {

        let testData;

        before(() => {
            cy.fixture('tasks').then(t => {
                testData = t;
            })
        })

        it('Deve cadastrar uma nova tarefa usando dado fixo', () => {
            const taskName = 'Ler um livro de Node JS'
    
            cy.removeTaskByName(taskName)
            cy.createTask(taskName)
    
            cy.contains('main div p', taskName)
                .should('be.visible')
        })
    
        it('Não deve permitir tarefa duplicada', () => {
    
            const task = testData.duplicado
    
            cy.removeTaskByName(task.name)
    
            cy.postTask(task)
    
            cy.createTask(task.name)
    
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
    
        })
    
        it('Nome da tarefa é um campo obrigatório', () => {
            cy.createTask()
    
            cy.isRequired('This is a required field')
        })
    })

    context('Atualização', () => {
        it('Deve concluir uma tarefa', () => {
            const task = {
                name: 'Devo pagar a conta de internet',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('Exclusão', () => {
        it('Deve excluir uma tarefa', () => {
            const task = {
                name: 'Estudar Javascript',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
})