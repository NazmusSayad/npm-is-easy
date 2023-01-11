import { findNestedItems } from '../utils/utils'
import { isOkString, NodeType, parseString } from './utils'

export const TSImportType = (parsed: any): NodeType[] => {
  return findNestedItems(parsed, 'type', 'TSImportType')
    .filter((node) => isOkString(node.argument))
    .map((node) => parseString(node.argument))
}

export const ImportDeclaration_ExportNamedDeclaration_ExportAllDeclaration = (
  parsed
) => {
  return [
    findNestedItems(parsed, 'type', 'ImportDeclaration'),
    findNestedItems(parsed, 'type', 'ExportDeclaration'),
    findNestedItems(parsed, 'type', 'ExportNamedDeclaration'),
    findNestedItems(parsed, 'type', 'ExportAllDeclaration'),
  ]
    .flat()
    .filter((node) => {
      if (isOkString(node.source)) return true
      console.log(node)
    })
    .map((node) => parseString(node.source))
}

export const CallExpressionImport = (parsed) => {
  return findNestedItems(parsed, 'type', 'CallExpression')
    .filter(
      (node) => node.callee?.type === 'Import' && isOkString(node.arguments[0])
    )
    .map((node) => parseString(node.arguments[0]))
}

export const CallExpressionRequire = (parsed) => {
  return findNestedItems(parsed, 'type', 'CallExpression')
    .filter(
      (node) =>
        node &&
        node.callee?.type === 'Identifier' &&
        node.callee?.name === 'require' &&
        isOkString(node.arguments[0])
    )
    .map((node) => parseString(node.arguments[0]))
}
