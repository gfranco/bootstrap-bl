({
    block: 'b-page',
    title: 'Say hello to Bootstrap',
    head: [
        { elem: 'css', url: '/bootstrap-bl/pages/index/index.css' },
        { elem: 'css', url: '/bootstrap-bl/pages/docs.css' }
    ],
    content: [
        {
            block: 'b-head',
            content: {
                block: 'b-grid',
                content: [
                    {
                        tag: 'h1',
                        content: 'bootstrap-bl'
                    },
                    {
                        block: 'lead',
                        tag: 'p',
                        content: 'Тот же Бутстрап — только лучше!'
                    }
                ]
            }
        },
        {
            block: 'b-grid',
            content: [
                {
                    tag: 'h2',
                    content: 'Default buttons'
                },
                {
                    tag: 'p',
                    content: [
                        'Button styles can be applied to anything with the ',
                        {
                            block: 'code',
                            mods: { type: 'inline' },
                            content: '.btn'
                        },
                        ' class applied. However, typically you\'ll want to apply these to only ',
                        {
                            block: 'code',
                            mods: { type: 'inline' },
                            content: '&lt;a&gt;'
                        },
                        ' and ',
                        {
                            block: 'code',
                            mods: { type: 'inline' },
                            content: '&lt;button&gt;'
                        },
                        ' elements for the best rendering.'
                    ]
                },
                {
                    block: 'table',
                    mods: { bordered: 'yes', striped: 'yes' },
                    content: [
                        {
                            tag: 'thead',
                            content: {
                                tag: 'tr',
                                content: [
                                    {
                                        tag: 'th',
                                        content: 'Button'
                                    },
                                    {
                                        tag: 'th',
                                        content: 'class=""'
                                    },
                                    {
                                        tag: 'th',
                                        content: 'Description'
                                    }
                                ]
                            }
                        },
                        {
                            tag: 'tbody',
                            content: [
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                content: 'Default'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Standard gray button with gradient'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'primary' },
                                                content: 'Primary'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_primary'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Provides extra visual weight and identifies the primary action in a set of buttons'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'info' },
                                                content: 'info'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_info'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Used as an alternative to the default styles'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'success' },
                                                content: 'Success'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_success'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Indicates a successful or positive action'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'warning' },
                                                content: 'Warning'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_warning'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Indicates caution should be taken with this action'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'danger' },
                                                content: 'Danger'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_danger'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Indicates a dangerous or potentially negative action'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'inverse' },
                                                content: 'Inverse'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_inverse'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Alternate dark gray button, not tied to a semantic action or use'
                                        },
                                    ]
                                },
                                {
                                    tag: 'tr',
                                    content: [
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'btn',
                                                mods: { type: 'link' },
                                                content: 'Link'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: {
                                                block: 'code',
                                                mods: { type: 'inline' },
                                                content: 'btn btn_type_link'
                                            }
                                        },
                                        {
                                            tag: 'td',
                                            content: 'Deemphasize a button by making it look like a link while maintaining button behavior'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'h2',
                    content: 'Button sizes'
                },
                {
                    tag: 'p',
                    content: [
                        {
                            block: 'btn',
                            mods: { size: 'large', type: 'primary' },
                            content: 'Large button'
                        },
                        ' ',
                        {
                            block: 'btn',
                            mods: { size: 'large' },
                            content: 'Large button'
                        }
                    ]
                },
                {
                    tag: 'p',
                    content: [
                        {
                            block: 'btn',
                            mods: { type: 'primary' },
                            content: 'Default button'
                        },
                        ' ',
                        {
                            block: 'btn',
                            content: 'Default button'
                        }
                    ]
                },
                {
                    tag: 'p',
                    content: [
                        {
                            block: 'btn',
                            mods: { size: 'small', type: 'primary' },
                            content: 'Small button'
                        },
                        ' ',
                        {
                            block: 'btn',
                            mods: { size: 'small' },
                            content: 'Small button'
                        }
                    ]
                },
                {
                    tag: 'p',
                    content: [
                        {
                            block: 'btn',
                            mods: { size: 'mini', type: 'primary' },
                            content: 'Mini button'
                        },
                        ' ',
                        {
                            block: 'btn',
                            mods: { size: 'mini' },
                            content: 'Mini button'
                        }
                    ]
                },
                {
                    tag: 'h2',
                    content: 'Button groups'
                },
                {
                    block: 'btn-group',
                    content: [
                        {
                            block: 'btn',
                            content: 'Left'
                        },
                        {
                            block: 'btn',
                            content: 'Middle'
                        },
                        {
                            block: 'btn',
                            content: 'Right'
                        }
                    ]
                },
                {
                    block: 'btn-toolbar',
                    content: [
                        {
                            block: 'btn-group',
                            content: [
                                {
                                    block: 'btn',
                                    content: '1'
                                },
                                {
                                    block: 'btn',
                                    content: '2'
                                },
                                {
                                    block: 'btn',
                                    content: '3'
                                },
                                {
                                    block: 'btn',
                                    content: '4'
                                }
                            ]
                        },
                        {
                            block: 'btn-group',
                            content: [
                                {
                                    block: 'btn',
                                    content: '5'
                                },
                                {
                                    block: 'btn',
                                    content: '6'
                                },
                                {
                                    block: 'btn',
                                    content: '7'
                                }
                            ]
                        },
                        {
                            block: 'btn-group',
                            content: {
                                block: 'btn',
                                content: '8'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
